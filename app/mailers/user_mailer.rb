class UserMailer < ActionMailer::Base
#	default to: Proc.new {User.pluck(:email)
	default :from => "ProductGaga,2周实现你的想法，还送1000元！ <productgaga@163.com>"

	layout 'mailtemplate', :only=>[:idea_invite, :oldfriend_idea_invite, :idea_donate_notication, :update_idea_invite]

	# 新用户邀请
	def idea_invite(sendtitle,sendcontent,sendidea,sendinvitation,sendurl)

		@mailcontent = sendcontent
		@url = sendurl
		@myidea = sendidea
#		gagatile = "ProductGaga,从想法到盈利"
#		email_with_name = "#{gagatile} <#{sendinvitation.recipient_email}>"
		sendinvitation.update_attribute(:sent_at, Time.now)
		
		mail(:to =>sendinvitation.recipient_email, :subject =>sendtitle) 

#		mail(:to =>email_with_name, :subject =>sendtitle)
	end


	# 老用户邀请
	def oldfriend_idea_invite(sendtitle,sendcontent,sendemail,sendidea)

		@mailcontent = sendcontent
		@myidea = sendidea
		@url = "http://www.productgaga.com/ideas/#{sendidea.id}"
		mail(:to =>sendemail, :subject=>sendtitle)

	end

	def idea_donate_notication(sendtitle,sendcontent,sendemail,sendidea)


		@mailcontent = sendcontent
		@myidea = sendidea
		@url = "http://www.productgaga.com/ideas/#{sendidea.id}"
		mail(:to =>sendemail,:subject=>sendtitle)
	end

	def update_idea_invite(sendtitle,sendcontent,sendemail,sendidea)


		@mailcontent = sendcontent
		@myidea = sendidea
		@url = "http://www.productgaga.com/ideas/#{sendidea.id}"
		mail(:to =>sendemail,:subject=>sendtitle)
	end

	def update_junior_business(sendtitle,sendcontent,sendemail,sendidea)

		render :action=>'update_junior_business', :layout=>'juniortemplate'

		@mailcontent = sendcontent
		@myidea = sendidea
		@url = "http://www.productgaga.com/ideas/#{sendidea.id}"
		mail(:to =>sendemail,:subject=>sendtitle)

	end

	def sharer_invite(sendtitle,sendcontent,sendidea,sendinvitation,sendurl)

		@mailcontent = sendcontent
		@url = sendurl
		@myidea = sendidea
		sendinvitation.update_attribute(:sent_at, Time.now)
		
		mail(:to =>sendinvitation.recipient_email, :subject =>sendtitle) 
	end



#	def invitation(invitation, signup_url)

#		@signup_url = signup_url

#		mail(:to=>invitation.recipient_email,:subject=>'Invitation')
#		invitation.update_attribute(:sent_at, Time.now)

#	end
end
	