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
	end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def userideaship_params
      params.require(:user_ideaship).permit(:user_id, :idea_id, :relationtype, :p1donate)
    end

  
end
