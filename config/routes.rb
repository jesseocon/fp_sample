FpSample::Application.routes.draw do
  root :to => "photo_albums#index"
  
  resources :photo_albums do 
    resources :assets
  end
end
