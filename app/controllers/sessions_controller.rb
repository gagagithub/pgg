class SessionsController < ApplicationController

	def new
	end

	def create
		user = User.where(email: params[:email]).first
		if user && user.authenticate(params[:password])
			sign_in user
			redirect_to user
		else
			flash[:error] = '邮箱/密码 输入错误。'
#			render 'new'
			redirect_to root_path
		end

	end

	def destroy
		sign_out
		redirect_to root_path
	end
end
