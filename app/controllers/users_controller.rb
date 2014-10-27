class UsersController < ApplicationController

  def new
  	@user = User.new(:invitation_token => params[:invitation_token])
    @user.email = @user.invitation.recipient_email if @user.invitation
  end

  def show
  	@user = User.find(params[:id])
#    @owneridea = @user.ideas
#    @ownerideas = owneridea.where(relationtype:'0')
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
#      UserMailer.confirm(@user).deliver
      sign_in @user
  		flash[:success] = "Welcome to the 99bill Oversea Wallet App ! "
  		redirect_to @user
  	else
  		render 'new'
  	end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
  end

end
