class UserMailer < ActionMailer::Base
#	default to: Proc.new {User.pluck(:email)
	default :from => "productgaga@163.com"

	def idea_invite(email,title,content,idea)
		@mailcontent = content
		@url = "http://localhost:3000/ideas/#{idea.id}"
		@url1 = "http://www.baidu.com"
		mail(:to =>email, :subject =>title)
	end

	def invitation(invitation, signup_url)
#		subject 'Invitation'
#		recipients invitation.recipient_email
#		body :invitation => invitation, :signup_url => signup_url
		@signup_url = signup_url

		mail(:to=>invitation.recipient_email,:subject=>'Invitation')
#		invitation.update_attribute(:sent_at, Time.now)

	end
end
	