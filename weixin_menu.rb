#encoding:utf-8
require "uri" 
require "net/http" 
require 'json' 
require 'open-uri'

# 获取token
uri = URI.parse("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx1dfa90a510873a11&secret=544b0facc957d2717f12b5f47bc9323f")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
#http.verify_mode = OpenSSL::SSL::VERIFY_NONE
request = Net::HTTP::Get.new(uri.request_uri)
response = http.request(request)
array = JSON.parse(response.body)
token = array["access_token"]
puts token

# 设置菜单
params = {"button"=>[

{"type"=>"click","name"=>"明星众筹","key"=>"V110"},{"name"=>"产品","sub_button"=>[{"type"=>"click","name"=>"我的产品","key"=>"V202"},{"type"=>"click","name"=>"关注产品","key"=>"V203"}]},{"name"=>"关于","sub_button"=>[{"type"=>"click","name"=>"新手必读","key"=>"V301"},{"type"=>"click","name"=>"服务介绍","key"=>"V302"},{"type"=>"click","name"=>"合伙人","key"=>"V304"}]}]}

http = Net::HTTP.new("api.weixin.qq.com")
request = Net::HTTP::Post.new("/cgi-bin/menu/create?access_token="+token,{'Content-Type' => 'application/json'})
#request.set_form_data(params)
request.body  = params.to_json
response = http.request(request)

puts response
#puts uri
puts params.to_json