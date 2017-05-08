# User shops
class Shop
  include Mongoid::Document
  ## carrierwave
  mount_uploader :image, ShopImageUploader

  ## relation's
  belongs_to :user

  ## field's
  field :name
  field :slug
  field :description
  field :url
  field :notify_url
  field :image
  ##validation's

  validates :name, presence: true
  validates :description, presence: true

end
