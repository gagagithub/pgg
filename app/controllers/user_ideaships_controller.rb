class UserIdeashipsController < ApplicationController

	def new
		@user_ideaship = UserIdeaship.new		
	end

	def create
#		@user_ideaship = UserIdeaship.new(userideaship_params)
		@user_ideaship = UserIdeaship.new
		@user_ideaship.user_id = params[:user_id]
		@user_ideaship.idea_id = params[:idea_id]
		@user_ideaship.relationtype = '1'
		if @user_ideaship.save
			redirect_to current_user 
		else
			render 'new'
		end

	end

	def destroy
	end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def userideaship_params
      params.require(:user_ideaship).permit(:user_id, :idea_id, :relationtype)
    end

  
end
