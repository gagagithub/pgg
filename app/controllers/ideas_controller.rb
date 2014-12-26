class IdeasController < ApplicationController

  before_action :set_idea, only: [:show, :edit, :update, :destroy]
  before_action :validate_user, only: [:show]
  before_action :validate_junior_parter, only: [:junior]  

  # GET /ideas
  # GET /ideas.json
  def index
    if current_user.admin?
      @ideas = Idea.all
    else
      redirect_to root_path
    end
  end

  # GET /ideas/1
  # GET /ideas/1.json
  def show
#    render layout:false
  end

  # GET /ideas/new
  def new
    @idea = Idea.new
  end

  # GET /ideas/1/edit
  def edit
  end

  def updatestatus
  end

  def updatejuniorpartner
  end

  def share
  end

  def junior
    @idea = Idea.find(params[:id])
    
  end

  def donate    

    @idea = Idea.find(params[:id])
    junioruserid = params[:partnerid]

    donateuser = @idea.user_ideaships.where(relationtype:1, user_id:junioruserid).first
    donateuser.update_attribute(:p1donate, 300)

      
        emailtitle = "又一个朋友投资300元成为初级合伙人，你还在等什么？"
        emailcontent = "#{donateuser.email}刚成为#{@idea.name}的初级合伙人，他将拥有未来公司的创业原始股 1%，优先于非合伙人参与股权投资。初级合伙人招募结束后，你将永远和这个想法绝缘，你想要后悔一辈子吗？！"

        @idea.user_ideaships.where(relationtype:1).each do |invitedfriendrl|
         if(invitedfriendrl.user_id.nil?)
                        # => 如果该用户，之前邀请后一直没有注册过
                    @invitation = Invitation.new
                    @invitation.sender = current_user
                    @invitation.recipient_email = invitedfriendrl.email
                    @invitation.sender_id = current_user.id
                    @invitation.save

                    UserMailer.idea_invite(emailtitle,emailcontent,@idea,@invitation,
                                       signup_url(@invitation.token)).deliver                
          else

          UserMailer.idea_donate_notication(emailtitle,emailcontent,invitedfriendrl.email,@idea).deliver   

          end

        end
    
    redirect_to "/ideas/#{params[:id]}#maodian1"   

    
  end

  def nodonate    
    @idea = Idea.find(params[:id])
#    @idea.user_ideaships.where(relationtype:1, user_id: current_user.id).first.p1donate
    donateuser = @idea.user_ideaships.where(relationtype:1, user_id: current_user.id).first
    donateuser.update_attribute(:p1donate, 0)
    redirect_to "/ideas/#{params[:id]}#maodian1"       
  end


  def juniorsendmail

    @idea = Idea.find(params[:idea_id])
    
    @idea.user_ideaships.where(relationtype:1, p1donate:300).each do |juniorupdate|
        UserMailer.update_junior_business(params[:email_title],params[:email_content],juniorupdate.email,@idea).deliver   
    end

    redirect_to @idea

  end

  def sendmail

    @idea = Idea.find(params[:idea_id])

# => 如果是更新通知的链接(更新通知里，没有friend_emails的参数)
    if (params[:friend_emails].nil?) 
      @idea.user_ideaships.where(relationtype:1).each do |updateemail|
          if(updateemail.user_id.nil?)
            # => 如果该用户，之前邀请后一直没有注册过
                @invitation = Invitation.new
                @invitation.sender = current_user
                @invitation.recipient_email = updateemail.email
                @invitation.sender_id = current_user.id
                @invitation.save

                UserMailer.idea_invite(params[:email_title],params[:email_content],@idea,@invitation,
                                   signup_url(@invitation.token)).deliver                
          else
            # => 如果该用户，之前邀请后已经注册过
            UserMailer.update_idea_invite(params[:email_title],params[:email_content],updateemail.email,@idea).deliver   
          end
      end

    else
# => 如果是分享想法的链接
        friendsemails = params[:friend_emails].split(';')

        friendsemails.each do |friend_email|


    # =>  创建 invitation的链接. only for share, only for new user.

            if (User.where(email:friend_email).empty?)

                @invitation = Invitation.new
                @invitation.sender = current_user
                @invitation.recipient_email = friend_email
                @invitation.sender_id = current_user.id
                @invitation.save

                @idea.user_ideaships.build(email: friend_email, relationtype: 1);
            
                UserMailer.idea_invite(params[:email_title],params[:email_content],@idea,@invitation,
                                   signup_url(@invitation.token)).deliver

            else
                invitedfriendid = User.where(email:friend_email).first.id
                @idea.user_ideaships.build(email: friend_email, relationtype: 1,user_id: invitedfriendid);

                UserMailer.oldfriend_idea_invite(params[:email_title],params[:email_content],friend_email,@idea).deliver

            end 

            @idea.save
   

        end
# end of friendsemails.each.  
    end

    redirect_to @idea

  end

  # POST /ideas
  # POST /ideas.json
  def create
     @idea = Idea.new(idea_params)
     @idea = current_user.ideas.build(idea_params)
     @idea.save

     @idea.user_ideaships.build(user_id: @current_user.id,relationtype: 0);
#      #new.build(user_id: @current_user.id, relationtype: 0, idea_id: @idea[:id])

    respond_to do |format|
      if @idea.save
        format.html { redirect_to @idea, notice: '已成功创建想法.' }
        format.json { render :show, status: :created, location: @idea }
      else
        format.html { render :new }
        format.json { render json: @idea.errors, status: :unprocessable_entity }
      end
    end
  end


  # PATCH/PUT /ideas/1
  # PATCH/PUT /ideas/1.json
  def update
    respond_to do |format|
      if @idea.update(idea_params)
        format.html { redirect_to @idea, notice: 'Idea was successfully updated.' }
        format.json { render :show, status: :ok, location: @idea }
      else
        format.html { render :edit }
        format.json { render json: @idea.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ideas/1
  # DELETE /ideas/1.json
  def destroy

    userideaship = UserIdeaship.where(idea_id:@idea.id)
    userideaship.each do |uis|
    uis.destroy
    end

    @idea.destroy
    respond_to do |format|
      format.html { redirect_to current_user, notice: '已成功删除新创意。' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_idea
      @idea = Idea.find(params[:id])
    end


    def validate_user
      if(current_user.nil?)
        redirect_to root_path
      else
      validateresult = @idea.user_ideaships.where(user_id:current_user.id)
      redirect_to current_user, notice:"您不具备该用户的访问权限！" if validateresult.empty?
      end
    end

    def validate_junior_parter

       if(current_user.nil?)
          redirect_to root_path
        else
          @idea = Idea.find(params[:id])

          ideaowneresult = @idea.user_ideaships.where(user_id:current_user.id, relationtype:0)

          validateresult = @idea.user_ideaships.where(user_id:current_user.id, p1donate: 300)

          redirect_to current_user, notice:"您不具备该用户的访问权限！" if ( validateresult.empty? & ideaowneresult.empty?)
        end
    end


    # Never trust parameters from the scary internet, only allow the white list through.
    def idea_params
      params.require(:idea).permit(:intro, :name, :customer_segments, :customer_relationships, :value_proposition, :key_activities, :key_partners, :channels, :key_resources, :revenue_streams, :cost_structure)
    end
end
