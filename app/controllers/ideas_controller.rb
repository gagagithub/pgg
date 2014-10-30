class IdeasController < ApplicationController
  before_action :set_idea, only: [:show, :edit, :update, :destroy]

  # GET /ideas
  # GET /ideas.json
  def index
    @ideas = Idea.all
  end

  # GET /ideas/1
  # GET /ideas/1.json
  def show
  end

  # GET /ideas/new
  def new
    @idea = Idea.new
  end

  # GET /ideas/1/edit
  def edit
  end

  def share
#    UserMailer.idea_invite(params[:friend_email],params[:email_title]).deliver
  end

  def sendmail

    @inviteuseridea = UserIdeaship.new
    @inviteuseridea.idea_id = params[:idea_id]
    @inviteuseridea.email = params[:friend_email]
    @inviteuseridea.relationtype = 1
    @inviteuseridea.save

    @invitation = Invitation.new
    @invitation.sender = current_user
    @invitation.recipient_email = params[:friend_email]
    @invitation.sender_id = current_user.id
    @invitation.save

    @idea = Idea.find(params[:idea_id])
    UserMailer.idea_invite(params[:email_title],params[:email_content],@idea,@invitation,
                           signup_url(@invitation.token)).deliver

    redirect_to @idea
  end

  # POST /ideas
  # POST /ideas.json
  def create
     @idea = Idea.new(idea_params)
#    @idea = current_user.ideas.build(idea_params)

     @idea.save

     @user_ideaship = UserIdeaship.new
     @user_ideaship.relationtype = '0'
     @user_ideaship.user_id = current_user.id
     @user_ideaship.idea_id = @idea[:id]
     @user_ideaship.save


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

    # Never trust parameters from the scary internet, only allow the white list through.
    def idea_params
      params.require(:idea).permit(:intro, :name, :customer_segments, :customer_relationships, :value_proposition, :key_activities, :key_partners, :channels, :key_resources, :revenue_streams, :cost_structure)
    end
end
