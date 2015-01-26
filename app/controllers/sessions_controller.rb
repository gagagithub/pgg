class SessionsController < ApplicationController

	def new
	end

	def create

		user = User.where(name: params[:name]).first
		if user && user.authenticate(params[:password])
			if(!params[:myweixincode].nil?)
    			user.update_attribute(:weixincode, params[:myweixincode].join)
    		end
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
