Rails.application.routes.draw do

  resources :invitations

  resources :comments

  get 'static_pages/about' =>'static_pages#about'

  get 'static_pages/invitecode' =>'static_pages#invitecode'
  get 'users/index'=>'users#index'
  get 'ideas/index'=>'ideas#index'
  get 'user_ideaships/new'
  get 'user_ideaships/create'
  
#  get 'ideas/share'
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  get 'ideas/:id/share' => 'ideas#share', as: :share
  get 'ideas/:id/updatestatus' => 'ideas#updatestatus', as: :updatestatus
  get 'ideas/:id/donate' => 'ideas#donate', as: :donate
  get 'ideas/:id/nodonate' => 'ideas#nodonate', as: :nodonate
  
  post 'ideas/sendmail'


  resources :ideas
  
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  resources :user_ideaships, only: [:new, :create, :destroy]

  root to: 'static_pages#home'

  get '/signup/:invitation_token', to:'users#new', as: :signup
  #match '/signup/:invitation_token', to:'users#new', via:'get'
  #map.signup '/signup/:invitation_token', :controller => 'users', :action => 'new'

  match '/signin', to:'sessions#new', via:'get'
  match '/signout', to:'sessions#destroy', via:'delete'


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
