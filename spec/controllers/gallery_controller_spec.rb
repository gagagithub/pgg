require 'rails_helper'

RSpec.describe GalleryController, :type => :controller do

  describe "GET kuailv" do
    it "returns http success" do
      get :kuailv
      expect(response).to have_http_status(:success)
    end
  end

end
