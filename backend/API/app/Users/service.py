import base64
import time
from flask_restful import Resource,request
from flask_restful import reqparse
from sqlalchemy import engine

from app.models import Role, Leave_type, Employee, Permission, Leaves,Employee_Role, Status
from config import db
# User Validation function
def validateUser(email,pwd):
    emp=Employee.query.filter_by(opcito_email=email,password=pwd)
    if emp.count()>=1:
         return "True"
    else: return "false"
def getRole(role_id):
    R = Role.query.filter_by(id=role_id)
    for role in R:
        return role.role

# For User Validate
class ValidateUser(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('opcito_email',type=str)
            parser.add_argument('password',type=str)
            args = parser.parse_args()
            email = args['opcito_email']
            password = args['password']
            pwd = base64.b64encode(password)
            Res=validateUser(email,pwd)
            return Res
        except Exception as e:
            return {'error':str(e)};


# To Change Password
class ChangePassword(Resource):
    def put(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=str)
            parser.add_argument('opcito_email', type=str)
            parser.add_argument('password',type=str)
            parser.add_argument('new_password',type=str)
            args =parser.parse_args()
            id = args['id']
            email = args['opcito_email']
            password = args['password']
            new_password = args['new_password']
            pwd = base64.b64encode(password)
            new_pwd = base64.b64encode(new_password)
            Res = validateUser(email, pwd)
            if Res == 'True':
                emp=Employee.query.get
                emp.password = new_pwd
                db.session.commit()
                return "Password Updated"
            else:return "Error"
        except Exception as e:
                return {'error':str(e)};


# Register New Employee
class CreateUser(Resource):
    def post(self):
        try :
            # Parse the arguments

            parser = reqparse.RequestParser()
            parser.add_argument('id', type=str)
            parser.add_argument('emp_role', type=str)
            parser.add_argument('registration_id', type=str)
            parser.add_argument('fname', type=str)
            parser.add_argument('mname', type=str)
            parser.add_argument('lname', type=str)
            parser.add_argument('personal_email', type=str)
            parser.add_argument('opcito_email', type=str)
            parser.add_argument('contact', type=int)
            parser.add_argument('status', type=str)
            parser.add_argument('father_husband_name', type=str)
            parser.add_argument('gender', type=str)
            parser.add_argument('birthdate', type=str)
            parser.add_argument('user_id_number', type=str)
            parser.add_argument('pan_number', type=str)
            parser.add_argument('license_number', type=str)
            parser.add_argument('current_address1', type=str)
            parser.add_argument('current_address2', type=str)
            parser.add_argument('current_address3', type=str)
            parser.add_argument('current_state', type=str)
            parser.add_argument('current_city', type=str)
            parser.add_argument('current_pin', type=str)
            parser.add_argument('permanent_address1', type=str)
            parser.add_argument('permanent_address2', type=str)
            parser.add_argument('permanent_address3', type=str)
            parser.add_argument('permanent_state', type=str)
            parser.add_argument('permanent_city', type=str)
            parser.add_argument('permanent_pin', type=str)
            parser.add_argument('emergency_contact_name1', type=str)
            parser.add_argument('emergency_contact_number1', type=str)
            parser.add_argument('emergency_contact_name2', type=str)
            parser.add_argument('emergency_contact_number2', type=str)
            parser.add_argument('photo', type=str)
            parser.add_argument('password', type=str)
            parser.add_argument('role_id', type=int)
            parser.add_argument('created_by', type=str)

            args = parser.parse_args()
            emp_id = args['id']
            emp_role = args['emp_role']
            reg_id = args['registration_id']
            fname = args['fname']
            mname = args['mname']
            lname = args['lname']
            personal_email = args['personal_email']
            opcito_email = args['opcito_email']
            contact = args['contact']
            gender = args['gender']
            birthdate = args['birthdate']
            status = args['status']
            father_husband_name = args['father_husband_name']
            uid = args['user_id_number']
            pan = args['pan_number']
            license = args['license_number']
            current_address1 = args['current_address1']
            current_address2 = args['current_address2']
            current_address3 = args['current_address3']
            current_state = args['current_state']
            current_city = args['current_city']
            current_pin = args['current_pin']
            permanent_address1 = args['permanent_address1']
            permanent_address2 = args['permanent_address2']
            permanent_address3 = args['permanent_address3']
            permanent_state = args['permanent_state']
            permanent_city = args['permanent_city']
            permanent_pin = args['permanent_pin']
            emergency_cantact_name1 = args['emergency_contact_name1']
            emergency_cantact_number1 = args['emergency_contact_number1']
            emergency_cantact_name2 = args['emergency_contact_name2']
            emergency_cantact_number2 = args['emergency_contact_number2']
            photo = args['photo']
            password = args['password']
            created_by = args['created_by']
            created_date = time.strftime("%Y/%m/%d")

            password = base64.b64encode(password)
            empRole = Role.query.filter_by(role=emp_role)

            for rol in empRole:
                r_id = rol.id
            emp = Employee(emp_id,
                           reg_id,
                           fname,
                           mname,
                           lname,
                           status,
                           father_husband_name,
                           gender,
                           birthdate,
                           current_address1,
                           current_address2,
                           current_address3,
                           current_state,
                           current_city,
                           current_pin,
                           permanent_address1,
                           permanent_address2,
                           permanent_address3,
                           permanent_state,
                           permanent_city,
                           permanent_pin,
                           personal_email,
                           opcito_email,
                           contact,
                           uid,
                           pan,
                           license,
                           emergency_cantact_name1,
                           emergency_cantact_number1,
                           emergency_cantact_name2,
                           emergency_cantact_number2,
                           password,
                           photo,
                           r_id,
                           created_by,
                           created_date,
                           )
            db.session.add(emp);
            db.session.commit();
            return {'success':'Record Inserted'}
        except Exception as e:
            return {'Error' : str(e)}
# To Delete / Terminate Specific Employee
class DeleteUser(Resource):
    def delete(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            args = parser.parse_args()
            eid = args['id']
            try:
                Employee.query.filter_by(id=eid).delete()
                db.session.commit()
                return "Record Deleted"
            except Exception as e:
                return {'error':str(e)}
        except Exception as e:
            return {"error":str(e)};

# To Update Employee Information
class UpdateUser(Resource):
    def put(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id', type=str)
            parser.add_argument('fname', type=str)
            parser.add_argument('mname', type=str)
            parser.add_argument('lname', type=str)
            parser.add_argument('personal_email', type=str)
            parser.add_argument('opcito_email', type=str)
            parser.add_argument('contact', type=int)
            parser.add_argument('status', type=str)
            parser.add_argument('father_husband_name', type=str)
            parser.add_argument('gender', type=str)
            parser.add_argument('birthdate', type=str)
            parser.add_argument('user_id_number', type=str)
            parser.add_argument('pan_number', type=str)
            parser.add_argument('license_number', type=str)
            parser.add_argument('current_address1', type=str)
            parser.add_argument('current_address2', type=str)
            parser.add_argument('current_address3', type=str)
            parser.add_argument('current_state', type=str)
            parser.add_argument('current_city', type=str)
            parser.add_argument('current_pin', type=str)
            parser.add_argument('permanent_address1', type=str)
            parser.add_argument('permanent_address2', type=str)
            parser.add_argument('permanent_address3', type=str)
            parser.add_argument('permanent_state', type=str)
            parser.add_argument('permanent_city', type=str)
            parser.add_argument('permanent_pin', type=str)
            parser.add_argument('emergency_contact_name1', type=str)
            parser.add_argument('emergency_contact_number1', type=str)
            parser.add_argument('emergency_contact_name2', type=str)
            parser.add_argument('emergency_contact_number2', type=str)
            parser.add_argument('photo', type=str)
            parser.add_argument('role_id', type=int)
            parser.add_argument('updated_by', type=str)
            parser.add_argument('updated_date', type=str)

            args = parser.parse_args()
            id = args['id']
            e = Employee.query.get(id)
            e.first_name = args['fname']
            e.middle_name = args['mname']
            e.last_name = args['lname']
            e.personal_email = args['personal_email']
            e.opcito_email = args['opcito_email']
            e.contact = args['contact']
            e.gender = args['gender']
            e.birthdate = args['birthdate']
            e.status = args['status']
            e.father_husband_name = args['father_husband_name']
            e.uid = args['user_id_number']
            e.pan = args['pan_number']
            e.license = args['license_number']
            e.current_address1 = args['current_address1']
            e.current_address2 = args['current_address2']
            e.current_address3 = args['current_address3']
            e.current_state = args['current_state']
            e.current_city = args['current_city']
            e.current_pin = args['current_pin']
            e.permanent_address1 = args['permanent_address1']
            e.permanent_address2 = args['permanent_address2']
            e.permanent_address3 = args['permanent_address3']
            e.permanent_state = args['permanent_state']
            e.permanent_city = args['permanent_city']
            e.permanent_pin = args['permanent_pin']
            e.emergency_contact_name1 = args['emergency_contact_name1']
            e.emergency_contact_number1 = args['emergency_contact_number1']
            e.emergency_contact_name2 = args['emergency_contact_name2']
            e.emergency_contact_number2 = args['emergency_contact_number2']
            e.photo = args['photo']
            e.role = args['role_id']
            e.updated_by = args['updated_by']
            a = time.strftime("%Y/%m/%d")
            e.updated_date = a
            db.session.commit()
            return "Updated"
        except Exception as e:
            return {"error":str(e)}

# Operations on Roles
# To update the specific Role
class UpdateRole(Resource):
    def put(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            parser.add_argument('role', type=str)
            parser.add_argument('updated_by', type=str)
            parser.add_argument('updated_date', type=str)
            a = time.strftime("%Y/%m/%d")

            args = parser.parse_args()
            id = args['id']
            role = Role.query.get(id)
            role.role=args['role'],
            role.updated_by=args['updated_by'],
            role.updated_date= a
            db.session.commit()
            return "Updated"
        except Exception as e:
            return {'error':str(e)}

# To create the New Permission
class CreatePermission(Resource):
    def post(self):
        try :
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            parser.add_argument('permission',type=str)
            parser.add_argument('detail', type=str)
            parser.add_argument('created_by', type=str)
            parser.add_argument('created_date', type=str)
            parser.add_argument('updated_by', type=str)
            parser.add_argument('updated_date', type=str)

            ## yyyy/mm/dd format
            a=time.strftime("%Y/%m/%d")
            args = parser.parse_args()
            id = args['id']
            permission = args['permission']
            detail = args['detail']
            created_by = args['created_by']
            created_date = a
            updated_by = args['updated_by']
            updated_date = args['updated_by']

            r = Permission(id,permission,detail,created_by,created_date,updated_by,updated_date)

            db.session.add(r)
            db.session.commit()
            return "Role Added"
        except Exception as e:
            return {'error':str(e)}

# To Delete the Permission
class DeletePermission(Resource):
            def delete(self):
                try:
                    parser = reqparse.RequestParser()
                    parser.add_argument('id', type=int)
                    args = parser.parse_args()
                    rid = args['id']
                    Permission.query.filter_by(id=rid).delete()
                    db.session.commit()
                    return "Record deleted"
                except Exception as e:
                    return {"error": str(e)};

# To store all Employee leaves

class LeaveApplication(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            parser.add_argument('reason',type=str)
            parser.add_argument('remark',type=str)
            parser.add_argument('from_date',type=str)
            parser.add_argument('to_date', type=str)
            parser.add_argument('total_days', type=int)
            parser.add_argument('approval_person', type=str)
            parser.add_argument('approval_date', type=str)
            parser.add_argument('leave_type_id', type=int)
            parser.add_argument('status_id', type=int)
            parser.add_argument('employee_id', type=int)
            parser.add_argument('created_by', type=str)

            args = parser.parse_args()
            id = args['id']
            reason = args['reason']
            remark = args['remark']
            from_date = args['from_date']
            to_date = args['to_date']
            total_days = args['total_days']
            approval_person = args['approval_person']
            approval_date = args['approval_date']
            leave_type_id = args['leave_type_id']
            status_id = args['status_id']
            employee_id = args['employee_id']
            created_by = args['created_by']
            a = time.strftime("%Y/%m/%d")
            created_date = a

            leaves = Leaves(id,reason,remark,from_date,to_date,total_days,approval_person,approval_date,
                            leave_type_id,status_id,employee_id,
                            created_by,created_date)
            db.session.add(leaves)
            db.session.commit()
            return "Leave Application Submitted..."
        except Exception as e:
            return {'error':str(e)}

class CreateStatus(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('status',type=str)
            parser.add_argument('id', type=str)
            args = parser.parse_args();
            id = args['id'];
            status = args['status'];
            s = Status(id,status)
            db.session.add(s);
            db.session.commit()
            return "Status Add successfully..."
        except Exception as e:
            return {'Error':str(e)}
# Create Role
class CreateRole(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id', type=int)
            parser.add_argument('role', type=str)
            parser.add_argument('created_by', type=str)
            parser.add_argument('created_date', type=str)

            ## yyyy/mm/dd format
            a = time.strftime("%Y/%m/%d")
            args = parser.parse_args()
            id = args['id']
            role = args['role']
            created_by = args['created_by']
            created_date = a
            r = Role(id, role, created_by, created_date)
            db.session.add(r)
            db.session.commit()
            return "data Inserted"
        except Exception as e:
            return {'error': str(e)}


# To Delete the Role
class DeleteRole(Resource):
    def delete(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            args = parser.parse_args()
            rid = args['id']
            Role.query.filter_by(id=rid).delete()
            db.session.commit()
            return "Record deleted"
        except Exception as e:
            return {"error":str(e)};


# To Create Leave Type
class CreateLeave(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            parser.add_argument('leave_type',type=str)
            parser.add_argument('details', type=str)
            parser.add_argument('created_by', type=str)
            parser.add_argument('updated_by', type=str)
            parser.add_argument('updated_date', type=str)
            args = parser.parse_args()
            id = args['id']
            leave_type = args['leave_type']
            detail = args['details']
            created_by = args['created_by']
            a = time.strftime("%Y/%m/%d")
            created_date = a
            updated_by = args['updated_by']
            updated_date = args['updated_date']

            l = Leave_type(id,leave_type,detail,created_by,created_date)
            db.session.add(l)
            db.session.commit()
            return "Leave Type Created..."
        except Exception as e:
            return {'error':str(e)}


class GetAllUser(Resource):
    def get(self):
        try:
            emp = Employee.query.all()
            list = []
            for e in emp:
                rolename = getRole(e.Role_id)
                list.append( {'id':e.id,
                            'reg_no': e.registration_id,
                            'fname':e.first_name,
                            'mname':e.middle_name,
                            'lname':e.last_name,
                            'personal_email':e.personal_email,
                            'opcito_email':e.opcito_email,
                            'contact':e.contact,
                            'gender':e.gender,
                            'status':e.status,
                            'father_husband_name':e.father_husband_name,
                            'user_id_number':e.user_id_number,
                            'pan_number':e.pan_number,
                            'license_number':e.license_number,
                            'current_address1':e.current_address1,
                            'current_address2':e.current_address2,
                            'current_address3': e.current_address3,
                            'current_state':e.current_state,
                            'current_city':e.current_city,
                            'current_pin':e.current_pin,
                            'permanent_address1': e.permanent_address1,
                            'permanent_address2': e.permanent_address2,
                            'permanent_address3': e.permanent_address3,
                            'permanent_state': e.permanent_state,
                            'permanent_city': e.permanent_city,
                            'permanent_pin': e.permanent_pin,
                            'photo':e.photo,
                            'password':e.password,
                            'role_id':rolename,
                            'updated_by':e.updated_by,
                         #   'updated_date':e.updated_date
                            })
            return list


        except Exception as e:
            return {'error':str(e)}

class GetRole(Resource):
    def get(self):
        try:
            role = Role.query.all()
            list = []

            for r in role:
                  list.append( {'id':r.id,
                            'role':r.role})
            return list
        except Exception as e:
            return {'error':str(e)}

class GetUser(Resource):
    def get(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id',type=int)
            args = parser.parse_args()
            eid = args['id']
            emp = Employee.query.filter_by(id=eid)
            list = []
            for e in emp:
                rolename = getRole(e.Role_id)
                list.append({'reg_no': e.registration_id,
                      'fname':e.first_name,
                            'mname':e.middle_name,
                            'lname':e.last_name,
                            'personal_email':e.personal_email,
                            'opcito_email':e.opcito_email,
                            'contact':e.contact,
                            'gender':e.gender,
                            'birthdate':str(e.birthdate),
                            'status':e.status,
                            'father_husband_name':e.father_husband_name,
                            'user_id_number':e.user_id_number,
                            'pan_number':e.pan_number,
                            'license_number':e.license_number,
                            'current_address1':e.current_address1,
                            'current_address2':e.current_address2,
                            'current_address3': e.current_address3,
                            'current_state':e.current_state,
                            'current_city':e.current_city,
                            'current_pin':e.current_pin,
                            'permanent_address1': e.permanent_address1,
                            'permanent_address2': e.permanent_address2,
                            'permanent_address3': e.permanent_address3,
                            'permanent_state': e.permanent_state,
                            'permanent_city': e.permanent_city,
                            'permanent_pin': e.permanent_pin,
                            'photo':e.photo,
                            'emergency_contact_name1' :e.emergency_contact_name1,
                            'emergency_contact_name2': e.emergency_contact_name2,
                            'emergency_contact_number1': e.emergency_contact_number1,
                            'emergency_contact_number2': e.emergency_contact_number2,
                            'password':e.password,
                            'role_id':rolename,
                            })
            return list

        except Exception as e:
            return {'error':str(e)}

class GetUserByLog(Resource):
    def get(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('opcito_email',type=str)
            parser.add_argument('password', type=str)
            args = parser.parse_args()
            email = args['opcito_email']
            password = args['password']
            pwd = base64.b64encode(password)
            emp = Employee.query.filter_by(opcito_email=email,password=pwd)
           # emp = Employee.query.all()
            list = []

            for e in emp:
                  list.append( { 'reg_no': e.registration_id,
                      'fname':e.first_name,
                            'mname':e.middle_name,
                            'lname':e.last_name,
                            'personal_email':e.personal_email,
                            'opcito_email':e.opcito_email,
                            'contact':e.contact,
                            'gender':e.gender,
                            'birthdate':str(e.birthdate),
                            'status':e.status,
                            'role_id':e.Role_id,
                            })
            return list


        except Exception as e:
            return {'error':str(e)}
