# User shops
class Shop
  include Mongoid::Document
  ## carrierwave
  mount_uploader :image, ShopImageUploader

  ## relation's
  has_one :user

  ## field's
  field :name
  field :slug
  field :description
  field :url
  field :notify_url
  field :image
  ##validation's


end
