class UsersController < ApplicationController

  before_action :signed_in_user, only: [:show]
  before_action :correct_user, only: [:show]

  def index
    if current_user.admin?
      @users = User.all
    else
      redirect_to root_path
    end
  end

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
      catchup_idea_relation = UserIdeaship.where(email:@user.email)
      catchup_idea_relation.each do |cir|
        cir.user_id = @user.id
        cir.save
      end

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

    def signed_in_user
      redirect_to root_path, notice: "请先登录!" unless signed_in?
    end

    def correct_user
      @user = User.find(params[:id])
      redirect_to root_path, notice:"您不具备该用户的访问权限！" unless current_user?(@user)
    end
end



