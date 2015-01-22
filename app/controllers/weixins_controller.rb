class WeixinsController < ApplicationController

skip_before_filter :verify_authenticity_token	
before_filter :check_weixin_legality

  def show
  	render :text => params[:echostr]
  end

  def create
#    if params[:xml][:MsgType] == "text"
#      render "echo", :formats => :xml
#    end  	

      if params[:xml][:Event] == "CLICK"
        case params[:xml][:EventKey]
          when "V110"
              render "rtn110", :formats => :xml

          when "V202"
              render "rtn202", :formats => :xml

          when "V203"
              render "rtn203", :formats => :xml    

        end
      end
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
