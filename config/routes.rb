# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       get 'todolists/index'
#       post 'todolists/create'
#       get '/show/:id', to: 'todolists#show'
#       delete '/destroy/:id', to: 'todolists#destroy'
#     end
#   end
#   root 'homepage#index'
#   get '/*path' => 'homepage#index'

#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   # root "articles#index"
# end
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todolists, only: [:index, :create] do
        # Add any additional routes (show, update, destroy) if needed
      end
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
