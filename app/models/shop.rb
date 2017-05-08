# User shops
class Shop
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Slug
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

  slug :name, history: true

  ##validation's

  validates :name, presence: true
  validates_uniqueness_of :name, case_sensitive: false, scope: :user_id
  validates :description, presence: true

end
