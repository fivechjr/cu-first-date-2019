import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import View from '../components/common/view'
import SectionTitle from '../components/common/section-title'
import ChulaEngineeringIcon from '../components/common/chula-engineering-icon'

const PerClubView = ({ pageContext }) => {
    // console.log(context)
    return (
        <Layout>
            <SEO title="Home" />
            <section className="bg-white py-20">
                <View>
                    <SectionTitle
                        en={pageContext.type.toUpperCase()}
                        th={pageContext.name}
                        icon={<ChulaEngineeringIcon />}
                    />
                </View>
            </section>
        </Layout>
    )
}

export default PerClubView
