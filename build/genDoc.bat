SET JSDOC_DIR=%1%
SET JSDOC_TEMPLATE_DIR=%1%\templates\BBTemplate
SET BB_TEMPLATE_DIR=BBTemplate
SET BB_PLUGIN=bbPlugin.js
SET API_DOC_DIR=..\api
SET OUTPUT_DIR=..\..\output

rmdir /s /q "%JSDOC_TEMPLATE_DIR%"
mkdir "%JSDOC_TEMPLATE_DIR%"
xcopy %BB_TEMPLATE_DIR% "%JSDOC_TEMPLATE_DIR%" /e /y
copy %BB_PLUGIN% "%JSDOC_DIR%\app\plugins\" /y

java -jar %JSDOC_DIR%\jsrun.jar %JSDOC_DIR%\app\run.js -a "%API_DOC_DIR%" -t=%JSDOC_TEMPLATE_DIR% -d="%OUTPUT_DIR%" -u
