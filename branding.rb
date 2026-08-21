configs = {
  'INSTALLATION_NAME' => 'SiMBNext Inbox',
  'BRAND_NAME' => 'SiMBNext',
  'BRAND_URL' => 'https://simbnext.com',
  'WIDGET_BRAND_URL' => 'https://simbnext.com',
  'TERMS_URL' => 'https://simbnext.com/terms',
  'PRIVACY_URL' => 'https://simbnext.com/privacy',
  'LOGO' => 'https://www.simbnext.com/simbnext-logo.svg',
  'LOGO_DARK' => 'https://www.simbnext.com/simbnext-logo-dark.svg',
  'LOGO_THUMBNAIL' => 'https://www.simbnext.com/favicon.svg'
}

configs.each do |k, v|
  InstallationConfig.find_or_initialize_by(name: k).update!(value: v) rescue nil
  ActiveRecord::Base.connection.execute("INSERT INTO installation_configs (name, value, created_at, updated_at) VALUES ('#{k}', '#{v}', NOW(), NOW()) ON CONFLICT (name) DO UPDATE SET value = '#{v}', updated_at = NOW();") rescue nil
end

system('wget -q -O /tmp/fav.svg https://www.simbnext.com/favicon.svg')
[16, 32, 57, 60, 72, 76, 96, 114, 120, 144, 152, 180, 192, 512].each do |s|
  system("convert -background none -resize #{s}x#{s} /tmp/fav.svg /app/public/favicon-#{s}x#{s}.png >/dev/null 2>&1")
  system("convert -background none -resize #{s}x#{s} /tmp/fav.svg /app/public/apple-icon-#{s}x#{s}.png >/dev/null 2>&1")
  system("convert -background none -resize #{s}x#{s} /tmp/fav.svg /app/public/android-icon-#{s}x#{s}.png >/dev/null 2>&1")
end

Rails.cache.clear rescue nil
puts "=== SIMBNEXT BRANDING RE-APPLIED SUCCESSFULLY ==="