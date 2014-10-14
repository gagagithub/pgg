class SessionsController < ApplicationController

	def new
	end

	def create
#		user = User.find_by(email: params[:session][:email].downcase)
#	  	user = User.authenticate(params[:email],params[:password])

#		user = User.where(email: params[:session][:email].downcase)

#		if user && user.authenticate(params[:session][:password])
#		else
#		end

#  		user = User.authenticate(params[:email],params[:password])
#  		if user
#  			session[:user_id] = user.id
#  			redirect_to root_url, :notice =>"Logged in!"
#  		else
#  			flash.now.alert = "Invalid email or password"
#  			render "new"
#  		end
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
