class Shop
  include Mongoid::Document

  ## relation's
  has_one :user

  ## field's
  field :name
  field :description
  field :url

  ##validation's


end
