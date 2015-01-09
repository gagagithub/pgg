class TeasersetsController < ApplicationController

  def index
    @teasersets = Teaserset.all
  end

  def new
    @teaserset = Teaserset.new
  end

  def create
    @teaserset = Teaserset.new(teaserset_params)
#    @invitation.sender = current_user

#    respond_to do |format|
#	@teaserset.idea_id = 12
#	@teaserset.email = "aa@aa.com"

     if @teaserset.save

        flash[:notice] ="邀请朋友登记，即刻奖励创业原始股。您的推荐人号码是#{@teaserset.id}，详情可咨询qq:1846246903。"
        redirect_to :controller=>"gallery", :action =>"kuailv"
         


      else
        flash[:notice] = "请正确输入您的邮箱名称，和推荐人号码！"
        redirect_to :controller=>"gallery", :action =>"kuailv"
#        format.json { render json: @teaserset.errors, status: :unprocessable_entity }
      end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teaserset
      @teaserset = Teaserset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def teaserset_params
      params.require(:teaserset).permit(:idea_id, :inviter_id, :phone, :email)
    end


end
