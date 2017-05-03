Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'user/sessions'
  }
  authenticated :user do
    root 'dashboard#index'
  end

  unauthenticated do
    devise_scope :user do
      root 'user/sessions#new'
    end
  end

end
