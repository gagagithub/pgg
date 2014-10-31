class UserMailer < ActionMailer::Base
#	default to: Proc.new {User.pluck(:email)
	default :from => "productgaga@163.com"

	def idea_invite(sendtitle,sendcontent,sendidea,sendinvitation,sendurl)
		@mailcontent = sendcontent
#		@url = "http://localhost:3000/ideas/#{idea.id}"
		@url = sendurl
		sendinvitation.update_attribute(:sent_at, Time.now)
		
		mail(:to =>sendinvitation.recipient_email, :subject =>sendtitle)
	end

	def oldfriend_idea_invite(sendtitle,sendcontent,sendemail,sendidea)
		@mailcontent = sendcontent
		@url = "http://localhost:3000/ideas/#{sendidea.id}"
		mail(:to =>sendemail,:subject=>sendtitle)
	end


	def invitation(invitation, signup_url)

		@signup_url = signup_url

		mail(:to=>invitation.recipient_email,:subject=>'Invitation')
		invitation.update_attribute(:sent_at, Time.now)

	end
end
	