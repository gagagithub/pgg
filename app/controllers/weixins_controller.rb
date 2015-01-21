class WeixinsController < ApplicationController

skip_before_filter :verify_authenticity_token	
before_filter :check_weixin_legality

  def show
  	render :text => params[:echostr]
  end

  def create
    if params[:xml][:MsgType] == "text"
      render "echo", :formats => :xml
    end  	
  end

  def get_access_token
    get_app_id="wx1dfa90a510873a11"
    get_app_secret="544b0facc957d2717f12b5f47bc9323f"
    response=Typhoeus.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=#{get_app_id}&secret=#{get_app_secret}")
    response_json=JSON.parse(response.options[:response_body])
    response_json["access_token"]
  end

  private
  def check_weixin_legality
    array = ["productgaga1979", params[:timestamp], params[:nonce]].sort
    render :text => "Forbidden", :status => 403 if params[:signature] != Digest::SHA1.hexdigest(array.join)
  end

  def weixin_params
    params.require(:weixin).permit(:xml)
  end


end
