class Idea < ActiveRecord::Base
#	belongs_to :user
	has_many :user_ideaships
	has_many :users, :through => :user_ideaships
	has_many :comments

	mount_uploader :weixinqun, WeixinqunUploader

end
