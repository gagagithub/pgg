class WeixinsController < ApplicationController

skip_before_filter :verify_authenticity_token	
before_filter :check_weixin_legality

  def show
#  	puts "----------------------------------------"
  	render :text => params[:echostr]
  end

  def create
#  	puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    if params[:xml][:MsgType] == "text"
    puts "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"	
      render "echo", :formats => :xml
    end  	
  end

  private
  def check_weixin_legality
#  	puts "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"  	
#    puts params[:timestamp]
#    puts params[:nonce]
#    puts params[:signature]

    array = ["productgaga1979", params[:timestamp], params[:nonce]].sort
    render :text => "Forbidden", :status => 403 if params[:signature] != Digest::SHA1.hexdigest(array.join)
  end

end
