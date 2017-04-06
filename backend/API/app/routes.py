from config import api
from Users.service import GetUserByLog,CreateRole,DeleteRole,CreateUser,DeleteUser,CreatePermission,DeletePermission, GetUser
from Users.service import CreateStatus,LeaveApplication,GetRole,CreateLeave,GetAllUser,UpdateRole,UpdateUser,ValidateUser,ChangePassword

# Role Apies
api.add_resource(CreateRole, '/api/v1/CreateRole')
api.add_resource(DeleteRole, '/api/v1/DeleteRole')
api.add_resource(UpdateRole, '/api/v1/UpdateRole')
api.add_resource(GetRole, '/api/v1/GetRole')
# Permission Apies
api.add_resource(CreatePermission, '/api/v1/CreatePermission')
api.add_resource(DeletePermission, '/api/v1/DeletePermission')

api.add_resource(CreateStatus,'/api/v1/CreateStatus')

# User Operation Apies
api.add_resource(CreateUser, '/api/v1/CreateUser')
api.add_resource(UpdateUser, '/api/v1/UpdateUser')
api.add_resource(DeleteUser, '/api/v1/DeleteUser')
api.add_resource(GetUser, '/api/v1/GetUser')
api.add_resource(GetUserByLog,'/api/v1/GetUserByLog')
api.add_resource(GetAllUser, '/api/v1/GetAllUser')
api.add_resource(ValidateUser, '/api/v1/ValidateUser')
api.add_resource(ChangePassword, '/api/v1/ChangePassword')

# Leave Related Apies
api.add_resource(CreateLeave, '/api/v1/CreateLeave')
api.add_resource(LeaveApplication, '/api/v1/LeaveApplication')