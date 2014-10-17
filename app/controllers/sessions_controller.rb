class SessionsController < ApplicationController

	def new
	end

	def create
		user = User.where(email: params[:email]).first
		if user && user.authenticate(params[:password])
			sign_in user
			redirect_to user
		else
			flash.now[:error] = 'Invalid email/password combination'
			render 'new'
		end

	end

	def destroy
		sign_out
		redirect_to root_path
	end
end
