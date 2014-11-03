class StaticPagesController < ApplicationController
  def home

  	if current_user
  		redirect_to current_user
  	else
  		render layout:false
#  		render root_path
  	end
  end

  def invitecode
  		render layout:false
  end

end
