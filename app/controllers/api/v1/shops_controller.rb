module Api
  # Api V1 for shops
  class V1::ShopsController < ApplicationController
    before_action :authenticate_user!

    respond_to :json
    def index
      respond_to do |response|
        response.html { redirect_to root_path }
        response.json {
          data = current_user.shops.all
          render json: data
        }
      end
    end
  end
end
