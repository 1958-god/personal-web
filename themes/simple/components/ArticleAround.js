import SmartLink from '@/components/SmartLink'

/**
 * 上一篇，下一篇文章，以及返回首页
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAround({ prev, next }) {
  return (
    <section className='text-gray-800 dark:text-gray-400 min-h-12 flex items-center justify-between space-x-5 my-4'>
      {prev ? (
        <SmartLink
          href={`/${prev.slug}`}
          passHref
          className='text-sm cursor-pointer justify-start items-center flex hover:underline duration-300'>
          <i className='mr-1 fas fa-angle-double-left' />{prev.title}
        </SmartLink>
      ) : <span />}

      <SmartLink
        href='/'
        passHref
        className='text-sm cursor-pointer items-center flex hover:underline duration-300 whitespace-nowrap'>
        <i className='mr-1 fas fa-home' />首页
      </SmartLink>

      {next ? (
        <SmartLink
          href={`/${next.slug}`}
          passHref
          className='text-sm cursor-pointer justify-end items-center flex hover:underline duration-300'>
          {next.title}
          <i className='ml-1 my-1 fas fa-angle-double-right' />
        </SmartLink>
      ) : <span />}
    </section>
  )
}
