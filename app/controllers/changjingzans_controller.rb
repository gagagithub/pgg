class ChangjingzansController < ApplicationController

	def new
	
	end

	def create
	end

	def destroy
	end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def changjingzan_params
      params.require(:changjingzan).permit(:user_id, :idea_id, :comment_id, :zan)
    end

end
