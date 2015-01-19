Rails.application.routes.draw do

#  get 'weixin/show'
#  get 'weixin/create'


  get 'weixin' =>'weixin#show'
  put 'weixin/create'

  get 'teasersets/new'
  get 'teasersets/index'

  get 'gallery/kuailv'

  resources :invitations

  resources :comments

  get 'static_pages/about' =>'static_pages#about'

  get 'static_pages/invitecode' =>'static_pages#invitecode'
  get 'users/index'=>'users#index'
  get 'ideas/index'=>'ideas#index'
  get 'user_ideaships/new'
  get 'user_ideaships/create'
  get 'changjingzan/new'
  get 'changjingzan/create'
  get 'gallery/kuailv'

  get 'comments/zan'
  get 'comments/unzan'
  
  #  get 'ideas/share'
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  get 'ideas/:id/share' => 'ideas#share', as: :share
  get 'ideas/:id/invitesharer' => 'ideas#invitesharer', as: :invitesharer

  get 'ideas/:id/junior' => 'ideas#junior', as: :junior
  get 'ideas/:id/updatestatus' => 'ideas#updatestatus', as: :updatestatus
  get 'ideas/:id/updatejuniorpartner' => 'ideas#updatejuniorpartner', as: :updatejuniorpartner
  get 'ideas/:id/donate' => 'ideas#donate', as: :donate
  get 'ideas/:id/nodonate' => 'ideas#nodonate', as: :nodonate
  get 'ideas/:id/p2donate' => 'ideas#p2donate', as: :p2donate
  get 'ideas/:id/p2nodonate' => 'ideas#p2nodonate', as: :p2nodonate
  get 'comments/:id/zan' => 'comments#zan', as: :zan
  get 'comments/:id/unzan' => 'comments#unzan', as: :unzan


  post 'ideas/sendmail'
  post 'ideas/juniorsendmail'
  post 'ideas/invitesharersendmail'

  resources :ideas
  resources :teasersets, only: [:new, :create]
  
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  resources :user_ideaships, only: [:new, :create, :destroy]
  resources :changjingzan, only: [:new, :create, :destroy]

  root to: 'static_pages#home'

  get '/signup/:invitation_token', to:'users#new', as: :signup
  #match '/signup/:invitation_token', to:'users#new', via:'get'
  #map.signup '/signup/:invitation_token', :controller => 'users', :action => 'new'

  match '/signin', to:'sessions#new', via:'get'
  match '/signout', to:'sessions#destroy', via:'delete'


  get ':controller(/:action(/:id))(.:format)'
  post ':controller(/:action(/:id))(.:format)'

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
