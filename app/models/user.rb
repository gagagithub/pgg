class User < ActiveRecord::Base

	  has_many :user_ideaships
	  has_many :ideas, :through => :user_ideaships

	  has_many :comments

	  has_many :sent_invitations, :class_name => 'Invitation', :foreign_key => 'sender_id'
	  belongs_to :invitation

	  before_create :set_invitation_limit

	  before_save { self.email = email.downcase }
	  before_create :create_remember_token
	  validates :name, presence: true, length: { maximum: 50 }
	  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	  validates :email, presence:   true,
	                    format:     { with: VALID_EMAIL_REGEX },
	                    uniqueness: { case_sensitive: false }
	  has_secure_password
	  validates :password, length: { minimum: 6 }
	  validates_presence_of :invitation_id, :message =>'is required'

	  validates_uniqueness_of :invitation_id

	  def User.new_remember_token
	    SecureRandom.urlsafe_base64
	  end

	  def User.hash(token)
	    Digest::SHA1.hexdigest(token.to_s)
	  end

	  def invitation_token
  		invitation.token if invitation
	  end

	  def invitation_token=(token)
  		self.invitation = Invitation.find_by_token(token)
	  end

	  private

		  def create_remember_token
		  	self.remember_token = User.hash(User.new_remember_token)
		  end

		  def set_invitation_limit
		  	self.invitation_limit = 100
		  end

end