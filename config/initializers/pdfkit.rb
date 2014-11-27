# config/initializers/pdfkit.rb
PDFKit.configure do |config|
#  config.wkhtmltopdf = '/usr/local/rvm/gems/ruby-2.1.2/bin/wkhtmltopdf'
  config.default_options = {
    :page_size => 'Legal',
    :print_media_type => true
  }
  # Use only if your external hostname is unavailable on the server.
  config.root_url = "http://www.productgaga.com"
  config.verbose = false

end