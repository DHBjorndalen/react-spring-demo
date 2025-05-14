Write-Host "Building React frontend..."
Set-Location -Path "frontend"
npm run build
Set-Location -Path ".."

Write-Host "Cleaning Spring Boot static folder..."
Remove-Item -Recurse -Force "src\main\resources\static\*"

Write-Host "Copying React build to Spring Boot..."
Copy-Item -Recurse -Force "frontend\build\*" "src\main\resources\static\"

Write-Host "Done! React build deployed to Spring Boot."
