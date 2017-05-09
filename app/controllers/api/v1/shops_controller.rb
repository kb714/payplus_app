module Api
  # Api V1 for shops
  class V1::ShopsController < ApplicationController
    before_action :authenticate_user!

    respond_to :json
    def index
      data = current_user.shops.all
      render json: data
    end

    def create
      data = current_user.shops.new(shop_params)
      if data.save
        render json: data, status: :ok
      else
        render json: data.errors, status: :bad_request
      end
    end

    def destroy
      data = current_user.shops.find_by(slugs: params[:id])
      if data.destroy
        render json: data, status: :ok
      else
        render json: data, status: :bad_request
      end
    end

    private

    def shop_params
      params.permit(:name, :description)
    end
  end
end
