class UserMailer < ActionMailer::Base
#	default to: Proc.new {User.pluck(:email)
	default :from => "productgaga@163.com"

	def idea_invite(email,title,content)
		mail(:to =>email, :subject =>title,:body=>content)
	end
end
	