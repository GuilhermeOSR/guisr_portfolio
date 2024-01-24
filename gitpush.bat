@echo off
echo 'Enter the commit message:'
set /p commitMessage=""


git add .
git commit -m "%commitMessage%"

git push https://github.com/GuilhermeOSR/guisr_portfolio.git

echo Comitado e Enviado com sucesso!
pause
