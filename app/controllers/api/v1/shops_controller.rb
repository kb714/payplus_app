module Api
  # Api V1 for shops
  class V1::ShopsController < ApplicationController
    before_action :authenticate_user!

    respond_to :json
    def index
      sleep 3
      #data = current_user.shops.all
      data = [
          {
             id: 1,
             name: 'Test'
          },
          {
             id: 2,
             name: 'Test 2'
          },
      ]
      render json: data
    end
  end
end
