json.array!(@ideas) do |idea|
  json.extract! idea, :id, :user_id, :intro, :customer_segments, :customer_relationships, :value_proposition, :key_activities, :key_partners, :channels, :key_resources, :revenue_streams, :cost_structure
  json.url idea_url(idea, format: :json)
end
