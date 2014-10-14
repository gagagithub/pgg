require 'rails_helper'

RSpec.describe "ideas/new", :type => :view do
  before(:each) do
    assign(:idea, Idea.new(
      :user_id => 1,
      :intro => "MyString",
      :customer_segments => "MyText",
      :customer_relationships => "MyText",
      :value_proposition => "MyText",
      :key_activities => "MyText",
      :key_partners => "MyText",
      :channels => "MyText",
      :key_resources => "MyText",
      :revenue_streams => "MyText",
      :cost_structure => "MyText"
    ))
  end

  it "renders new idea form" do
    render

    assert_select "form[action=?][method=?]", ideas_path, "post" do

      assert_select "input#idea_user_id[name=?]", "idea[user_id]"

      assert_select "input#idea_intro[name=?]", "idea[intro]"

      assert_select "textarea#idea_customer_segments[name=?]", "idea[customer_segments]"

      assert_select "textarea#idea_customer_relationships[name=?]", "idea[customer_relationships]"

      assert_select "textarea#idea_value_proposition[name=?]", "idea[value_proposition]"

      assert_select "textarea#idea_key_activities[name=?]", "idea[key_activities]"

      assert_select "textarea#idea_key_partners[name=?]", "idea[key_partners]"

      assert_select "textarea#idea_channels[name=?]", "idea[channels]"

      assert_select "textarea#idea_key_resources[name=?]", "idea[key_resources]"

      assert_select "textarea#idea_revenue_streams[name=?]", "idea[revenue_streams]"

      assert_select "textarea#idea_cost_structure[name=?]", "idea[cost_structure]"
    end
  end
end
