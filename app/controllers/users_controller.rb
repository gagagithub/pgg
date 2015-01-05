class UsersController < ApplicationController

  before_action :signed_in_user, only: [:show]
  before_action :correct_user, only: [:show]
  before_action :set_user, only: [:show, :edit, :update, :destroy]

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

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end  

  def show
  	@user = User.find(params[:id])
#    @owneridea = @user.ideas
#    @ownerideas = owneridea.where(relationtype:'0')
    if @user.admin?
      @users = User.all
      render 'index'
    end
  end

  def create
  	@user = User.new(user_params)

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

  def destroy

    @user = User.find(params[:id])

    @user.destroy
    respond_to do |format|
      format.html { redirect_to current_user, notice: '已成功删除用户。' }
      format.json { head :no_content }
    end
  end


  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation,:invitation_id,:alipayid, :wechatid)
    end

    def signed_in_user
      redirect_to root_path, notice: "请先登录!" unless signed_in?
    end

    def correct_user
      @user = User.find(params[:id])
      redirect_to root_path, notice:"您不具备该用户的访问权限！" unless current_user?(@user)
    end

    def set_user
      @user = User.find(params[:id])
    end    
end



