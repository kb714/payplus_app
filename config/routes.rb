Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'devise_override/sessions'
  }
  authenticated :user do
    root 'dashboard#index'
  end

  unauthenticated do
    devise_scope :user do
      root 'devise_override/sessions#new'
    end
  end

  scope :api do
    scope :v1 do
      resources :shops, controller: 'api/v1/shops'
    end
  end

  resources :shops, only: %w[show update], path: '/'

end
