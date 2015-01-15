class UserIdeashipsController < ApplicationController

	def new
		@user_ideaship = UserIdeaship.new		
	end

	def create

		@user_ideaship = UserIdeaship.new
		if @user_ideaship.save
			redirect_to current_user 
		else
			render 'new'
		end

	end

	def destroy

    @user_ideaship = UserIdeaship.find(params[:id])

    @user_ideaship.destroy
    respond_to do |format|
      format.html { redirect_to current_user, notice: '已成功删除被邀请的朋友。' }
      format.json { head :no_content }
    end		
	end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def userideaship_params
      params.require(:user_ideaship).permit(:user_id, :idea_id, :relationtype, :p1donate, :p2donate)
    end

  
end
