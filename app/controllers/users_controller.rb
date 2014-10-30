class UsersController < ApplicationController

  def new
  	@user = User.new(:invitation_token => params[:invitation_token])
    @user.email = @user.invitation.recipient_email if @user.invitation

    render layout:false

#    @user.invitation_id = @user.invitation.id
  end

  def show
  	@user = User.find(params[:id])
#    @owneridea = @user.ideas
#    @ownerideas = owneridea.where(relationtype:'0')
  end

  def create
  	@user = User.new(user_params)

#    puts "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
#    puts @user.email
#    puts @user.invitation_id

  	if @user.save
      sign_in @user
      @catchup_idea_relation = UserIdeaship.where(email:@user.email).first
      @catchup_idea_relation.user_id = @user.id
      @catchup_idea_relation.save

#  		flash[:success] = "Welcome to the 99bill Oversea Wallet App ! "
  		redirect_to @user
  	else
  		render 'new'
  	end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation,:invitation_id)
  end

end
