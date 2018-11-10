Search.setIndex({docnames:["Tutorial","deployment","faq","featurehub","featurehub.admin","featurehub.evaluation","featurehub.modeling","featurehub.problems","featurehub.user","index","intro","modules","user-guide"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,nbsphinx:1,sphinx:55},filenames:["Tutorial.ipynb","deployment.md","faq.md","featurehub.rst","featurehub.admin.rst","featurehub.evaluation.rst","featurehub.modeling.rst","featurehub.problems.rst","featurehub.user.rst","index.rst","intro.md","modules.rst","user-guide.md"],objects:{"":{featurehub:[3,0,0,"-"]},"featurehub.admin":{postprocessing:[4,0,0,"-"],sqlalchemy_declarative:[4,0,0,"-"],sqlalchemy_main:[4,0,0,"-"]},"featurehub.admin.postprocessing":{TimeoutException:[4,1,1,""],append_feature_functions:[4,2,1,""],build_and_save_all_features:[4,2,1,""],build_feature_matrix:[4,2,1,""],extract_and_save_all_tables:[4,2,1,""],extract_table:[4,2,1,""],load_dataset_from_dir:[4,2,1,""],load_feature_matrix:[4,2,1,""],load_features_df:[4,2,1,""],load_table1:[4,2,1,""],load_table:[4,2,1,""],null_feature:[4,2,1,""],prepare_automl_file_name:[4,2,1,""],recover_function:[4,2,1,""],save_feature_matrix:[4,2,1,""],save_submission:[4,2,1,""],save_table1:[4,2,1,""],save_table:[4,2,1,""],time_limit:[4,2,1,""]},"featurehub.admin.sqlalchemy_declarative":{EvaluationAttempt:[4,3,1,""],Feature:[4,3,1,""],Metric:[4,3,1,""],Problem:[4,3,1,""],User:[4,3,1,""]},"featurehub.admin.sqlalchemy_declarative.EvaluationAttempt":{code:[4,4,1,""],created_at:[4,4,1,""],id:[4,4,1,""],problem:[4,4,1,""],problem_id:[4,4,1,""],user:[4,4,1,""],user_id:[4,4,1,""]},"featurehub.admin.sqlalchemy_declarative.Feature":{code:[4,4,1,""],created_at:[4,4,1,""],description:[4,4,1,""],feature_dill_quoted:[4,4,1,""],id:[4,4,1,""],md5:[4,4,1,""],metrics:[4,4,1,""],problem:[4,4,1,""],problem_id:[4,4,1,""],user:[4,4,1,""],user_id:[4,4,1,""]},"featurehub.admin.sqlalchemy_declarative.Metric":{created_at:[4,4,1,""],feature:[4,4,1,""],feature_id:[4,4,1,""],id:[4,4,1,""],name:[4,4,1,""],scoring:[4,4,1,""],value:[4,4,1,""]},"featurehub.admin.sqlalchemy_declarative.Problem":{created_at:[4,4,1,""],data_dir_test:[4,4,1,""],data_dir_train:[4,4,1,""],entities_featurized_table_name:[4,4,1,""],entities_table_name:[4,4,1,""],evaluationattempts:[4,4,1,""],features:[4,4,1,""],files:[4,4,1,""],id:[4,4,1,""],name:[4,4,1,""],problem_type:[4,4,1,""],problem_type_details:[4,4,1,""],table_names:[4,4,1,""],target_table_name:[4,4,1,""]},"featurehub.admin.sqlalchemy_declarative.User":{created_at:[4,4,1,""],evaluationattempts:[4,4,1,""],features:[4,4,1,""],id:[4,4,1,""],name:[4,4,1,""]},"featurehub.admin.sqlalchemy_main":{ORMManager:[4,3,1,""]},"featurehub.admin.sqlalchemy_main.ORMManager":{session_scope:[4,5,1,""]},"featurehub.evaluation":{client:[5,0,0,"-"],discourse:[5,0,0,"-"],future:[5,0,0,"-"],response:[5,0,0,"-"]},"featurehub.evaluation.client":{EvaluatorClient:[5,3,1,""],EvaluatorServer:[5,3,1,""]},"featurehub.evaluation.client.EvaluatorClient":{check_if_registered:[5,5,1,""],evaluate:[5,5,1,""],submit:[5,5,1,""]},"featurehub.evaluation.client.EvaluatorServer":{check_if_registered:[5,5,1,""],evaluate:[5,5,1,""],submit:[5,5,1,""]},"featurehub.evaluation.discourse":{DiscourseFeatureTopic:[5,3,1,""],DiscourseFeatureTopicTemplate:[5,3,1,""]},"featurehub.evaluation.discourse.DiscourseFeatureTopic":{format_code:[5,5,1,""],format_metrics:[5,5,1,""],get_params:[5,5,1,""],post_feature:[5,5,1,""]},"featurehub.evaluation.discourse.DiscourseFeatureTopicTemplate":{bullet:[5,4,1,""],indent:[5,4,1,""],render:[5,5,1,""],render_title:[5,5,1,""]},"featurehub.evaluation.future":{HubAuth:[5,3,1,""]},"featurehub.evaluation.future.HubAuth":{cache:[5,4,1,""],cache_max_age:[5,4,1,""],user_for_token:[5,5,1,""]},"featurehub.evaluation.response":{EvaluationResponse:[5,3,1,""]},"featurehub.evaluation.response.EvaluationResponse":{STATUS_CODE_BAD_AUTH:[5,4,1,""],STATUS_CODE_BAD_FEATURE:[5,4,1,""],STATUS_CODE_BAD_REQUEST:[5,4,1,""],STATUS_CODE_DB_ERROR:[5,4,1,""],STATUS_CODE_DUPLICATE_FEATURE:[5,4,1,""],STATUS_CODE_OKAY:[5,4,1,""],STATUS_CODE_SERVER_ERROR:[5,4,1,""],from_string:[5,6,1,""]},"featurehub.modeling":{metrics:[6,0,0,"-"],model:[6,0,0,"-"],scorers:[6,0,0,"-"]},"featurehub.modeling.metrics":{Metric:[6,3,1,""],MetricList:[6,3,1,""]},"featurehub.modeling.metrics.Metric":{convert:[6,5,1,""],from_dict:[6,6,1,""],name_to_scoring:[6,7,1,""],to_string:[6,5,1,""]},"featurehub.modeling.metrics.MetricList":{append:[6,5,1,""],convert:[6,5,1,""],from_dict_user:[6,6,1,""],from_list_db:[6,6,1,""],from_object:[6,6,1,""],insert:[6,5,1,""],to_string:[6,5,1,""]},"featurehub.modeling.model":{Model:[6,3,1,""]},"featurehub.modeling.model.Model":{BINARY_METRIC_AGGREGATION:[6,4,1,""],CLASSIFICATION:[6,4,1,""],CLASSIFICATION_SCORING:[6,4,1,""],MULTICLASS_METRIC_AGGREGATION:[6,4,1,""],REGRESSION:[6,4,1,""],REGRESSION_SCORING:[6,4,1,""],compute_metrics:[6,5,1,""],compute_metrics_cv:[6,5,1,""],compute_metrics_train_test:[6,5,1,""],cv_score_mean:[6,5,1,""],scores_to_metriclist:[6,5,1,""]},"featurehub.modeling.scorers":{ndcg_score:[6,2,1,""],rmsle_score:[6,2,1,""]},"featurehub.user":{session:[8,0,0,"-"]},"featurehub.user.session":{Session:[8,3,1,""]},"featurehub.user.session.Session":{discover_features:[8,5,1,""],evaluate:[8,5,1,""],get_entity_features:[8,5,1,""],get_sample_dataset:[8,5,1,""],print_my_features:[8,5,1,""],submit:[8,5,1,""]},"featurehub.util":{compute_dataset_hash:[3,2,1,""],get_function2:[3,2,1,""],get_function:[3,2,1,""],get_source:[3,2,1,""],get_top_level_function_name:[3,2,1,""],is_positive_env:[3,2,1,""],myhash:[3,2,1,""],possibly_talking_action:[3,2,1,""],run_isolated:[3,2,1,""]},featurehub:{admin:[4,0,0,"-"],evaluation:[5,0,0,"-"],modeling:[6,0,0,"-"],user:[8,0,0,"-"],util:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","exception","Python exception"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"],"5":["py","method","Python method"],"6":["py","classmethod","Python class method"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:function","3":"py:class","4":"py:attribute","5":"py:method","6":"py:classmethod","7":"py:staticmethod"},terms:{"30s":1,"break":1,"byte":[1,3],"class":[4,5,6,8],"default":[1,2,3,4,5,8],"final":[6,9],"float":6,"function":[3,4,5,6,8,9],"import":[2,3],"int":[5,6],"long":3,"new":[1,3,8,9],"null":4,"return":[0,3,5,6,8],"static":[1,5,6],"true":[1,3,5,6],"try":[0,1,2],"while":0,For:[0,1,8],One:[0,6],That:0,The:[0,1,3,5,8,9],Then:[0,5,6,8],There:1,These:[1,6,9],Uses:3,Using:9,__builtins__:3,abc:6,abl:[1,2,3],about:0,abov:[0,1],accept:0,access:[1,2,9],accompani:9,account:[1,12],accur:0,accuraci:[0,6],acquir:9,across:6,action:3,activ:1,actual:[0,1],add:1,added:[0,1],addit:[0,1],addition:1,admin:[1,3,11],admin_password:1,admin_usernam:1,administ:9,administr:[2,9,12],adminus:1,after:2,afterward:3,age:0,age_with_random_nois:0,algorithm:3,all:[0,1,2,3,4,6],all_zero:0,allow:[0,1,9],alreadi:[0,1,5],also:[0,1,5,12],altern:0,altogeth:0,alwai:1,amount:1,ani:[0,1,2,3],anticip:3,anyon:3,anyth:3,api:4,app:9,append:[0,1,4,6],append_feature_funct:4,appli:0,applic:[0,1,9],appropri:[0,4,6],arg:[3,5],argument:0,around:0,arrai:6,ask:[0,2,5,12],aspect:0,associ:[0,1,6],assumpt:6,attribut:5,auc:6,auth:5,authent:[1,5],auto:1,autom:12,automat:[0,1,9],automl:[3,11],autosav:2,avail:[0,1,2],averag:6,avoid:[0,1],awai:0,back:0,backend:[1,9],bad:0,bad_auth:5,bad_featur:5,bad_request:5,base:[4,5,6,8],basic:12,becaus:[0,5],been:[0,1],befor:[3,6],begin:2,being:3,below:0,besid:1,best:[],better:0,binar:0,binary_metric_aggreg:6,bodi:[0,2],bool:[3,4,5],both:6,briefli:0,browser:12,bug:0,build:[0,1,4,5,8],build_and_save_all_featur:4,build_feature_matrix:4,built:[0,1,9],bullet:5,button:2,cach:5,cache_max_ag:5,call:[0,3],can:[0,1,5,8,9,12],candid:0,cannot:[0,3],categori:1,caveat:3,certain:0,certif:1,chain:3,challeng:0,chang:[0,1,2],check:[0,5,12],check_if_regist:5,checkout:1,checkpoint:2,checksum:3,chosen:0,classif:[0,6],classification_scor:6,classmethod:[5,6],clean:1,clean_al:1,clear:0,client:[0,3,11],clone:1,closer:0,cloud:0,co_nam:3,code:[0,1,3,4,5,8],code_frag:[0,8],coerc:0,collabor:9,colleagu:0,collect:[6,9],column:[0,1,4,8,9],com:1,combin:0,come:0,command:[0,1,4,8],competit:1,compil:4,compos:1,comput:[0,1,3,5,6,8,12],compute_dataset_hash:3,compute_metr:6,compute_metrics_cv:6,compute_metrics_train_test:6,concis:0,conda:1,config:1,configur:[9,12],confirm:[1,3,12],connect:[4,5],consid:3,consider:1,constant:3,contact:[2,12],contain:[1,5],container:9,content:[9,11],context:4,continu:1,control:[1,2],convers:[0,6],convert:6,cooki:5,correct:[0,6],correspond:[0,1],could:3,creat:[0,1,4],created_at:4,credenti:[1,4],critic:0,cross:[0,5,6,8],cryptograph:3,csv:1,cumul:6,current:[1,3],cutoff:[0,1],cv_score_mean:6,data:[2,5,6,8,9,12],data_dir:4,data_dir_test:4,data_dir_train:4,databas:[1,4,5,6,8,9],datafram:[0,3,4,6,8,9],dataseri:6,dataset:[3,4,5,8,9],db_error:5,deal:6,debug:[1,2],declar:[0,4,5],def:0,defin:[0,3],definit:[0,1],delet:1,demo:0,demonstr:0,depend:1,deploi:1,deploy:9,describ:0,descript:[0,3,4,5,8],deseri:3,desir:1,detail:[0,1,2],detect:6,develop:1,dict:[3,5,6,8],dictinari:6,dictionari:[0,5,6,8],did:0,differ:[0,1,2,3],dill:3,direct:1,directli:[0,1,3,5],directori:1,disappear:2,discount:6,discours:[1,3,9,11],discourse_client_api_token:1,discourse_client_api_usernam:1,discourse_domain_nam:1,discourse_feature_category_nam:1,discourse_feature_group_nam:1,discoursefeaturetop:5,discoursefeaturetopictempl:5,discov:[0,8,9],discover_featur:[0,8],discuss:12,displai:[0,2],docker:1,docker_network_nam:1,dockerfil:1,document:[0,12],doe:[0,1,3,5],doesn:1,doing:1,domain:[0,1,12],domin:1,don:1,done:[0,1,3],down:1,download:1,due:1,dump:[1,5],duplic:0,duplicate_featur:5,dure:0,each:[1,5,6,8,9],easi:[0,1],effici:3,effort:9,either:[0,1],element:[0,6],email:[1,12],empti:[5,8],enabl:1,encod:[3,5,6],encrypt:1,end:[0,2,5,6],engin:[0,1,4],engiti:1,english:0,enough:3,ensur:[0,1],entir:1,entiti:[0,1,4,8],entities_featur:5,entities_featurized_table_nam:4,entities_table_nam:4,entity_featur:[0,8],entri:[5,8],env:1,environ:[1,3,4,5,8],error:[0,6],essenti:0,etc:0,eval:1,eval_api_token:1,eval_container_nam:1,eval_container_port:1,eval_flask_debug:1,eval_image_nam:1,evalu:[1,2,3,8,9,11],evaluationattempt:4,evaluationrespons:5,evaluatorcli:5,evaluatorserv:5,everi:9,everyth:1,exact:1,exampl:[0,1,6],except:[0,4],execut:[0,1,3],exist:[1,9],expect:[0,5],experi:[1,9,12],expert:0,expertis:0,expir:1,explain:0,explan:0,explor:9,expos:1,ext:4,extern:0,extract:[0,1,3,5,8],extract_and_save_all_t:4,extract_t:4,facilit:[1,9],fail:5,fals:[4,5],faq:[0,9],favor:1,featur:[1,4,5,8,9],feature_cod:5,feature_descript:5,feature_dill_quot:4,feature_extraction_time_limit:4,feature_id:4,feature_matrix:4,feature_metr:5,featurehub:1,features_df:4,features_on_disk:4,feedback:9,few:2,ff_container_memlimit:1,ff_container_nam:1,ff_data_dir:1,ff_domain_email:1,ff_domain_nam:1,ff_idle_server_timeout:1,ff_image_nam:1,ff_project_nam:1,field:5,figur:3,file:[1,2,3,4],filesystem:1,fill:4,fillna:0,filter:[0,8],find:[0,6],first:[0,3,12],first_name_is_long:0,fit:[0,6],fix:0,flag:1,flask:[1,5],focus:1,fold:6,follow:[0,1,2],foo:3,forc:2,format:6,format_cod:5,format_metr:5,forum:[0,1,2,9],fragment:[0,8],from:[0,1,3,4,5,6],from_dict:6,from_dict_us:6,from_list_db:6,from_object:6,from_str:5,full:0,fulli:1,further:0,futur:[3,11],gain:6,gener:[0,1,4],get:[4,6,9],get_entity_featur:[0,8],get_funct:3,get_function2:3,get_param:5,get_sample_dataset:[0,8],get_sourc:3,get_top_level_function_nam:3,git:1,github:1,given:[0,1,3,5],global:2,good:0,ground:6,group:[0,1],group_feature_indic:4,group_id:4,guid:[0,9],handl:6,happen:2,happi:0,hard:3,has:0,hash:3,have:[0,1,2],hdi:1,head:0,help:[1,2,9,12],here:[0,3,12],hex:1,hi_lo_ag:0,high:0,hold:8,hope:0,host:1,how:[0,9,12],howev:1,http:1,hub:5,hub_api_prot:1,hub_client:1,hub_client_api_token:1,hub_container_nam:1,hub_image_nam:1,hubauth:5,human:[0,4],icon:2,idea:0,ident:5,identifi:5,idl:1,iloc:0,imag:1,imagin:0,implement:[1,3],implicitli:1,impos:2,improv:1,imput:8,includ:[1,3,8,9],inclus:0,inde:0,indent:5,index:[1,6,9],indic:1,inform:[0,2],initi:[1,4],inlin:0,inplac:4,input:0,insert:6,inspect:0,instal:9,instanc:[1,5],instanti:[5,6],instruct:[2,12],intal:1,integ:[1,6],integr:[0,1,12],interact:[1,3,12],interfac:1,intern:1,internet:1,interv:1,intro:9,intuit:0,invalid:[0,2,5,8],ipynb:1,ipython:[2,3],is_positive_env:3,isol:[0,3,5,8],issu:[0,1],ith:1,its:0,jettison:0,join:0,json:5,jupyt:[0,2,9],jupyterhub:[5,9],jupyterhub_config:1,just:[0,1],kei:[0,1,5,6,8],kernel:2,keyword:0,kind:6,klass:5,know:1,known:1,kwarg:[4,5,6],label:[6,8],labelencod:6,languag:0,larg:1,last:0,launch:1,learn:[0,1,12],least:[1,3],leav:1,left:[3,8],len:0,length:[4,8],let:[0,1],letsencrypt:1,level:[0,3,8],librari:[0,1],lifecycl:9,like:[0,3,6],limit:[0,1,3,5],line:1,link:0,list:[0,1,2,5,6],listen:1,load:[0,8],load_dataset_from_dir:4,load_feature_matrix:4,load_features_df:4,load_tabl:4,load_table1:4,local:[0,2,3],localhost:1,log:[1,4,12],login:1,long_first_nam:0,look:[0,4,5,12],lookup:3,loss:2,machin:[0,1],mai:[0,1,2,6],make:[0,1,2,3],make_env_loc:1,makefil:1,manag:[4,9],mani:[0,1],manual:2,map:[0,3,6,8],mapper:4,margin:1,match:0,matric:4,matrix:[0,4],max_column:2,md5:[3,4],mean:[0,6],meet:0,member:[0,1,5],memori:1,mention:0,merg:1,messag:2,met:2,metadata:1,method:[0,1,3,5],metric:[0,1,3,4,5,8,11],metric_nam:0,metriclist:6,micro:6,might:0,miniconda:1,model:[0,1,3,5,8,11],modifi:[0,1],modify_dataset:0,modul:[0,9,11],moment:2,more:[1,2,3,9],most:[0,1],mount:1,move:0,multiclass_metric_aggreg:6,must:[1,3,5,6],mutablesequ:6,myhash:3,mysql:1,mysql_container_nam:1,mysql_data_volume_nam:1,mysql_databas:1,mysql_root_password:[1,4],mysql_root_usernam:[1,4],n_class:6,n_sampl:6,name:[0,1,3,4,5,6,8,12],name_to_scor:6,namespac:[0,3],natur:0,navig:0,ndcg:6,ndcg_score:6,necessari:1,need:[0,1],network:1,newli:1,newlin:3,next:0,nice:6,nois:0,non:0,none:[0,5,6,8],normal:[1,3,6],note:[1,2,3,6,9],notebook:[0,2,9],noth:5,now:[0,2],null_featur:4,number:0,numpi:[0,6],obj:[3,6],object:[3,4,5,6,8],observ:0,obtain:0,obviou:1,offer:0,offici:12,often:0,okai:[0,1,3,5],onc:1,one:[0,1,5,6,8],onli:[1,2,3],openssl:1,oper:6,option:[1,3,4,5],order:[0,2],organ:1,orm:[4,5],ormmanag:4,other:[0,3,6,8,9],otherwis:1,our:0,ourselv:3,out:[0,3,12],outlin:9,output:[1,5,6],outsid:0,over:1,overrid:[1,5],overwrit:5,packag:[1,9,11],page:[1,9],panda:[0,2,8],panel:2,paramet:[0,1],part:12,particip:0,pass:[0,5],password:[1,12],path:1,per:1,perform:[0,1,3,5,6,8],perl:[],permiss:4,persist:1,pickl:3,pip:1,pipelin:0,place:1,plai:0,platform:[0,12],point:[1,6],port:1,possibl:[2,5],possibly_talking_act:3,post:[0,1,2],post_featur:5,postprocess:[3,11],power:0,pre:[0,1],precis:6,predict:[0,6],prefix:1,prepar:9,prepare_automl_file_nam:4,preproccess:0,preprocess:[0,8],press:2,print:[0,3,5,8],print_my_featur:[0,8],prior:6,probabl:6,problem:[0,2,3,4,6,8,11],problem_id:[4,5],problem_nam:[4,5],problem_typ:[4,6],problem_type_detail:4,proce:[0,1],process:0,produc:3,project:1,prompt:[0,8],provid:[1,12],purpos:1,python35:[],python:[1,3,6,9],qualifi:1,qualiti:[0,9],queri:4,quick:12,rais:5,rand:[0,1],random:0,rank:6,raw:0,read:0,readabl:6,readi:0,realli:1,realtim:9,reason:[1,5,8],recal:[1,6],receiv:[2,5,12],recommend:[1,12],recov:4,recover_funct:4,recreat:5,recurs:3,refer:12,regist:[0,5,8,9],registr:1,regress:[0,6],regression_scor:6,reject:9,relat:1,relev:6,reload:0,remov:1,remove_nam:3,render:[5,12],render_titl:5,repeat:0,replac:1,repositori:1,repres:8,represent:6,requir:[0,1,2,3],reshap:0,resourc:[0,1,12],respect:[1,6],respons:[3,11],rest:1,restart:9,result:[0,3,5,8],reveal:0,right:[0,2],rmsle_scor:6,roc:6,roc_auc:6,role:0,root:[1,4,6],root_mean_squared_error:6,routin:0,row:[0,1],row_of_zero:0,rudimentari:0,run:[0,1,5,8],run_isol:3,same:[0,1,8],sampl:8,save:[2,4],save_feature_matrix:4,save_submiss:4,save_t:4,save_table1:4,scaffold:9,scalar_zero:0,scienc:[0,1,9,12],scientist:0,scope:0,score:[4,5,6,9],scorer:[3,11],scores_to_metriclist:6,script:1,search:[8,9],second:[0,4],secret:1,secrets_volume_nam:1,section:[0,1],secur:3,see:[0,1,9],self:1,semant:0,sens:1,sequenc:6,serial:3,server:[0,3,8,9,11],server_error:5,servic:5,session:[3,4,9,11],session_scop:4,set:[0,1,6],set_opt:2,setup:1,sever:[0,1],shape:[0,6],shell:1,should:[0,1,2,3,6],show:[1,2],shut:1,shutdown:1,sign:1,similarli:0,simpli:3,sinc:1,singl:[0,8],site:12,situat:3,skip:[0,5],sklearn:[0,1],slight:0,softwar:2,solv:3,some:[0,1,3],sort:0,sourc:[1,3,4,5,6,8],specif:[4,6],specifi:[1,5],spend:1,spin:1,split:[0,1,4,6],split_test:4,split_train:4,sqlalchemi:4,sqlalchemy_declar:[3,11],sqlalchemy_main:[3,11],squar:[0,6],src:1,ssl:[],start:[0,1,2,4],state:1,statement:3,status_cod:5,status_code_bad_auth:5,status_code_bad_featur:5,status_code_bad_request:5,status_code_db_error:5,status_code_duplicate_featur:5,status_code_okai:5,status_code_server_error:5,step:[0,1],still:[0,2,3],stop:[1,2,3],store:[1,8,9],str:[3,5,6,8],string:[0,1,3,4,5,6,8],subclass:5,submiss:0,submit:[1,5,8,9],submodul:11,subpackag:11,success:[5,8],successfulli:[1,2],suffix:4,support:6,sure:[1,2],syntax:0,system:[0,1,9],tabl:[0,1,8],table_nam:4,take:0,taken:1,talk:0,target:[0,1,5,8],target_table_nam:4,task:[0,1],technic:0,templat:1,term:0,termin:3,test:[0,1,5,6,8],testus:1,textbox:0,than:2,thei:[0,12],them:[0,1,2],themselv:12,thi:[0,1,2,3,5,6],thing:1,those:[0,9],three:1,through:[0,1,12],thu:[1,5],time:[0,1],time_limit:4,timeout:1,timeoutexcept:4,titl:5,to_str:6,togeth:9,token:[1,5],tool:9,top:[0,2,3,9],topic:9,topic_url:5,trace:1,trail:3,train:[1,5,6,8,9],trait:5,transact:4,transform:0,tri:6,truth:6,truthi:1,tupl:[0,3],turn:3,tutori:[9,12],two_paramet:0,txt:1,type:[0,6],typic:0,ubuntu:1,udpat:2,unabl:[3,5],under:6,underli:[0,6],unfortun:3,unless:1,unsecur:1,untest:1,until:1,updat:1,upgrad:[],use:[1,2,3,12],use_cach:5,use_discours:1,use_letsencrypt_cert:1,used:[1,3,8,9,12],useful:5,user:[0,3,4,5,6,9,11],user_for_token:5,user_id:4,user_model:5,user_nam:5,usernam:[1,5,12],uses:[0,3],using:[0,1,3,6],usual:[1,3],utf:3,util:[1,11],val:6,valid:[0,1,5,6,8],valu:[0,1,3,4,5,6,8],valueerror:5,variabl:[1,2,4,8],varieti:[1,6],verbos:[3,5],verifi:0,versatil:6,via:[0,1],video:12,view:1,virtual:[],visibl:1,volum:1,wai:0,walk:1,want:[0,1,2],web:[1,5,9,12],well:[1,3,9,12],were:1,what:[0,1,12],when:[0,1,2,3],where:[0,1,3],whether:[0,1,3,4,5],which:[0,3,5,12],who:0,whose:5,why:9,wide:[9,12],within:[0,2,8,12],without:[0,1,2,3],work:[0,2],workflow:0,workspac:0,wrap:[3,4],wrapper:5,write:[3,9],written:[0,8,9],wrong:0,xxh64:3,xxhash:3,xyz:[],y_pred:6,y_true:6,yes:1,yet:1,you:[0,1,2,12],your:[1,2,9,12],yum:[],zero:0},titles:["FeatureHub Tutorial","Deployment","FAQ","featurehub package","featurehub.admin package","featurehub.evaluation package","featurehub.modeling package","featurehub.problems package","featurehub.user package","FeatureHub","Intro","featurehub","User Guide"],titleterms:{"final":0,"function":[0,2],"import":0,"new":0,Use:0,Using:12,access:12,acquir:0,admin:4,administr:1,api:1,app:1,automl:6,can:2,client:[1,5],column:2,configur:1,content:[3,4,5,6,7,8],data:[0,1],databas:0,datafram:2,dataset:0,deploy:1,discours:[5,12],don:0,evalu:[0,5],everi:2,exist:0,explor:0,faq:2,featur:[0,2],featurehub:[0,2,3,4,5,6,7,8,9,11,12],format:1,forum:12,futur:5,get:0,global:0,guid:12,help:0,helper:0,how:2,hub:1,indic:9,instal:1,intro:10,jupyt:[1,12],jupyterhub:1,lifecycl:1,local:1,manag:1,metric:6,model:6,modul:[3,4,5,6,7,8],more:0,note:0,notebook:[1,12],other:1,outlin:0,packag:[3,4,5,6,7,8],postprocess:4,predict:1,prepar:0,problem:[1,7],reject:2,respons:5,restart:[1,2],scaffold:0,scorer:6,see:2,server:[1,2,5],session:[0,8],sqlalchemy_declar:4,sqlalchemy_main:4,ssl:1,submit:[0,2],submodul:[3,4,5,6,8],subpackag:3,tabl:9,topic:1,train:0,tutori:0,use:0,user:[1,8,12],userlist:1,util:3,variabl:0,why:2,wide:2,write:0,your:0}})