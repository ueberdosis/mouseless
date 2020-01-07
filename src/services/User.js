import Store from './Store'
import Setapp from './Setapp'

export default new class {

  get email() {
    return Store.get('verification.purchase.email', null)
  }

  get isVerified() {
    if (Setapp.isActive) {
      return true
    }

    const verification = Store.get('verification', null)

    return verification
      ? !!verification.success
      : false
  }

}()
