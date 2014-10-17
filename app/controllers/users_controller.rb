class UsersController < ApplicationController

  def new
  	@user = User.new
  end

  def show
  	@user = User.find(params[:id])
#    @owneridea = @user.ideas
#    @ownerideas = owneridea.where(relationtype:'0')
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
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
