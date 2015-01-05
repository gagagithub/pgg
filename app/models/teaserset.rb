class Teaserset < ActiveRecord::Base
	validates :email, :inviter_id, presence: true
end
